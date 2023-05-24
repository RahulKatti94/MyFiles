import style from "./style.module.css"

const Style = ()=> {

    const HyperTag = {
        fontSize : "15px",
        backgroundColor : 'gold',
        textAlign : 'center', 

    }

    

    return (
        <div className='container card'>
            <h1 className={style.txt}>HELLO WORLD</h1>
            <h2 style={HyperTag}>This is H2 Tag</h2>
            <button className={style.btn}>CLICK ME </button>

        </div>
    )


}

export default Style