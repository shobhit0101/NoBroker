import './body-cards.styles.css'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

const BodyCards = () => {
    return (
        <div class="bodycard-container">
            <div class="square">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="mask" />
                <div class="class_h1">Property owners get free posting when they register</div>
                <p className='class_p'>Post your residential / commercial property</p>

                {/* <div><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" class="button">Read More</a></div> */}
                <div className="square_button"><Button type='submit'>POST PROPERTY </Button></div>
            </div>

            <div class="square">
                <img src="https://images.unsplash.com/photo-1636138390620-119327795fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xBNVlaTDhaNzhjZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=600" class="mask" />
                <div class="class_h1">Get some tenants for your property</div>
                <p className='class_p'>Rent your residential / commercial property</p>

                {/* <div><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" class="button">Read More</a></div> */}
                <div className="square_button"><Button type='submit'>RENT PROPERTY</Button></div>

            </div>



        </div>


    )
}

export default BodyCards