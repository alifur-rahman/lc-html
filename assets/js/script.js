// use static 



document.addEventListener('DOMContentLoaded', function () {
    // JAVASCRIPT FOR CUSTOM MODAL 
    const modal_attr = document.querySelector('[data-modal-id]');
    if(modal_attr){
        modal_attr.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);

            
            // Check if the modal exists
            if (modal) {
                modal.classList.add('modal-show');
                document.body.classList.add('modal-open');
                
                // Close button inside the modal
                const closeButton = modal.querySelector('.modal_close_button');
                
                if (closeButton) {
                    closeButton.addEventListener('click', function () {
                        modal.classList.remove('modal-show');
                        document.body.classList.remove('modal-open');
                    });
                }
    
                 // Listen for clicks on the document
                 document.addEventListener('click', function (event) {
                    const modalWrapper = modal.getElementsByClassName('modal-wrapper')[0];
                    // Check if the clicked element is not inside the modal
                    let isRemove = true;
                    if(modal_attr.contains(event.target)){
                        isRemove = false;
                    }
                    if (modalWrapper.contains(event.target)) {
                        isRemove = false;
                    }
                    if(isRemove){
                        modal.classList.remove('modal-show');
                        document.body.classList.remove('modal-open');
                    }
                   
                });
            }
            return false;
        });
    }
   // JAVASCRIPT FOR sign_up_preference form
   const signUpForm = document.getElementsByClassName('sign_up_preference');

   if (signUpForm.length !== 0) {
     for (const singleForm of signUpForm) {
       singleForm.addEventListener('submit', function (e) {
         e.preventDefault();
         // Find the selected radio input within the form
         const selectedRadio = singleForm.querySelector('input[type="radio"]:checked');
   
         if (selectedRadio) {
           // Get the value of the selected radio input
           const selectedValue = selectedRadio.value;
           window.location.href = selectedValue;
         }
       });
     }
   }
   
 
});


// accrodion js 

document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion items
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Add a click event listener to each accordion item
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        // Toggle the content when the header is clicked
        header.addEventListener('click', () => {
            // Close all accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').classList.remove('active');
                    const otherIcon = otherItem.querySelector('.toggle-icon');
                    otherIcon.textContent = '+';
                }
            });

            // Toggle the content of the clicked item
            content.classList.toggle('active');
            const icon = header.querySelector('.toggle-icon');
            icon.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });


});




// JAVASCRIPT FOR CUSTOM SELECT OPTION 
