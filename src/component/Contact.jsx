import React from "react";

const Contact = () => {
   return (
      <>
         <div className="contact">
            <main>
               <h1>Contact Us</h1>
               <form action="">
                  <div>
                     <label htmlFor="name">Name</label>
                     <input type="text" required placeholder="Name" />
                  </div>
                  <div>
                     <label htmlFor="email">Email</label>
                     <input type="email" required placeholder="Email" />
                  </div>
                  <div>
                     <label htmlFor="tellus">Message</label>
                     <input
                        type="text"
                        required
                        placeholder="Tell us about your question..."
                     />
                  </div>
                  <button type="submit">Send</button>
               </form>
            </main>
         </div>
      </>
   );
};

export default Contact;
