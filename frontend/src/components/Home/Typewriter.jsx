import Typewriter from "typewriter-effect";


const TypewriterEffect = () => {
    return (
        <h1>
            <Typewriter onInit={(typewriter) => {
                typewriter.typeString("The hotel experience for the elite ...")
                    .pauseFor(2000).deleteAll().typeString("Experience luxury in its finest form")
                    .pauseFor(2000).deleteAll().typeString("Book Now!!!")
                    .start()
            }} />
        </h1>
    );
}

export default TypewriterEffect;