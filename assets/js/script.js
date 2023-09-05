// use static 


// JAVASCRIPT FOR CUSTOM MODAL 
document.addEventListener('DOMContentLoaded', function () {
    const modal_attr = document.querySelector('[data-modal-id]');
    if(modal_attr){
        modal_attr.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            
            // Check if the modal exists
            if (modal) {
                modal.classList.add('modal-show');
                
                // Close button inside the modal
                const closeButton = modal.querySelector('.modal_close_button');
                
                if (closeButton) {
                    closeButton.addEventListener('click', function () {
                        modal.classList.remove('modal-show');
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
                    }
                   
                });
            }
        });
    }
   
});

// JAVASCRIPT FOR CUSTOM SELECT OPTION 
