import React, { useState, useEffect} from "react";


const InitialValue = {
    toptext: "",
    bottomtext: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
};

const MemeGenerator = () => {
    const [memes, setMemes] = useState(InitialValue);
    const [allmeme, setAllMemes] = useState([]);

    useEffect(  (e) => {

        const url = "https://api.imgflip.com/get_memes";
        fetch(url).then(response => {
            return response.json();
        }).then(response => {
            const {memes} = response.data;
            setAllMemes(memes);
            
        })

    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMemes({
            ...memes,
            [name]: value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * allmeme.length)
        const randMemeImg = allmeme[randNum].url;

        setMemes({
            ...memes,
            randomImg: randMemeImg 
        });
    }

    return (
         <div>
             <form onSubmit={handleOnSubmit} className="meme-form">
                <input 
                    name="toptext"
                    type="text"
                    value={memes.toptext}
                    onChange={handleChange}
                    placeholder="Enter top text"
                />

                <input 
                    name="bottomtext"
                    type="text"
                    value={memes.bottomtext}
                    onChange={handleChange}
                    placeholder="Enter bottom text"
                />  
                <button >Generate</button>
                
             </form>

             <div className="meme">
                <img src={memes.randomImg} alt="meme" />
                <h2 className="top">{memes.toptext}</h2>
                <h2 className="bottom">{memes.bottomtext}</h2>

             </div>
         </div>
    )
}

export default MemeGenerator;