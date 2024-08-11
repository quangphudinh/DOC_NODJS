// Button status
const buttonStatus = document.querySelectorAll('[button-status]');
// console.log(buttonStatus);

if(buttonStatus.length > 0){
    let url = new URL(window.location.href);
    console.log(url);

    buttonStatus.forEach(button => {
        button.addEventListener('click', () => {
            const status = button.getAttribute('button-status');
            console.log(status);
            if(status){
                url.searchParams.set('status', status);
            }
            else {
                url.searchParams.delete('status');
            }
            window.location.href = url;
        })
    })
}
//end button

//form search
const formSearch = document.querySelector('#form-search');
if(formSearch){
    let url = new URL(window.location.href);
    
    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        if(keyword){
            url.searchParams.set('keyword', keyword);
        }else{
            url.searchParams.delete('keyword');
        }
        window.location.href = url;
    })
}
//end form search

// pagination

const buttonPagination = document.querySelectorAll('[button-pagination]');
if(buttonPagination){
    let url = new URL(window.location.href);
    buttonPagination.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('button-pagination');
            // console.log(page);
            url.searchParams.set('page', page);
            window.location.href = url;
        })
    })
}

//end pagination

//check-box-multi all products

const checkboxMulti = document.querySelector('[checkbox-multi]');
if(checkboxMulti){
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    const inputIdList = checkboxMulti.querySelectorAll("input[name='id']");
    // console.log(inputCheckAll , inputIdList);

    inputCheckAll.addEventListener('click', () => {
        if(inputCheckAll.checked){
            inputIdList.forEach(input => {
                input.checked = true;
            })
        }else{
            inputIdList.forEach(input => {
                input.checked = false;
            })
        }
    })

    inputIdList.forEach(input => {
        input.addEventListener('click', () => {
            const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
            if(countChecked === inputIdList.length){
                inputCheckAll.checked = true;
            }

            if(!input.checked){
                inputCheckAll.checked = false;
            }
        })
    })
}

//end check-box-multi

// Form change multi

const formChangMulti = document.querySelector('[form-change-multi]');
if(formChangMulti){
    formChangMulti.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkboxMulti = document.querySelector('[checkbox-multi]');
        const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");

        if(inputsChecked.length > 0){   
            let ids = [];
            const inputIds = formChangMulti.querySelector("input[name='ids']"); 
            
            inputsChecked.forEach(input => {
                const id = input.value;
                ids.push(id);
            })

            inputIds.value = ids.join(',');
            formChangMulti.submit();
        }else{
            alert('Vui lòng chọn ít nhất một sản phẩm');
        }
    })
}

// end form change multi

// Delete Ittem

const buttonDelete = document.querySelectorAll('[button-delete]');
if(buttonDelete.length > 0){
    const formDeleteItem = document.querySelector('#form-delete-item');
    const path = formDeleteItem.getAttribute('data-path');

    buttonDelete.forEach(button => {
        button.addEventListener('click', () => {
           const isConfirm = confirm('Bạn có muốn xóa sản phẩm này ?');
           if(isConfirm){
                const id = button.getAttribute('data-id');
                const action = `${path}/${id}?_method=DELETE`;
                console.log(action);
                formDeleteItem.action = action;
                formDeleteItem.submit();
           }
        })
    })
}

// end Delete Ittem