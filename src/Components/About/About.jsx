import React from 'react'
import hero from '../../assets/images/sm.jpg';
import "./AboutStyle.css"


const About = () => {
    return (
        <section className="blog">
            <h1 className="headings"></h1>
            <main>
                <article>
                    <figure>
                        <img src={hero} alt="semantic versioning" width={400} />
                    </figure>
                    <div>
                        <br />
                        <h2>About</h2>
                        <br />
                        <br />

                        <p align="justify" >Sumbawa merupakan sebuah pulau yang berada di Nusa Tenggara Barat. Pulau terbesar di Nusa Tenggara
                            Barat ini memiliki banyak destinasi wisata alam yang sangat menarik lho, dan merupakan salah satu tujuan favorit para
                            wisatawan selain Pulau Lombok dan Pulau Bali. Selain itu, destinasi wisata alamnya juga cocok banget lho buat kamu yang
                            memiliki jiwa petualang baik dalam wisata alam maupun wisata kuliner.
                            <br /><br />
                            Berbicara tentang kuliner memang tidak ada habisnya,mengingat hampir setiap daerah
                            memiliki makanan khas dengan cita rasa yang begitu lezat.Sumbawa menjadi salah satu daerah yang menyimpan makanan khas
                            yang tidak boleh dilewatkan.Seperti yang diketahui, selain memiliki potensi wisata yang mengagumkan Sumbawa juga memiliki
                            makanan khas yang sangat sayang untuk dilewatkan.
                            <br /><br />
                            Maka dari itu dengan adanya Website Sumbawa Kuliner  (Web SuKu) memudahkan wisatawan untuk mengetahui jenis-jenis
                            kuliner yang ada di sumbawa serta dapat melakukan pemesanan secara online </p>
                    </div>

                </article>
            </main>
        </section>
    )
}

export default About