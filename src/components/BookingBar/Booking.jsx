import style from "./Booking.module.css"

function Booking(){
    return(
        <section className={style.bookingBar}>
            <p>Contect Us For Your Pooja</p>
            <button className={style.bookbtn}><a href="form-bar">Book Now</a></button>
        </section>
    )
}

export default Booking;