let addBtn1 = document.querySelector("#firstListButton");

addBtn1.addEventListener("click", () => {
    let newLi = document.createElement('li');
    newLi.innerText = document.querySelector("#firstListInput").value;
    newLi.classList.add("list-group-item");
    newLi.classList.add("fs-5");

    newLi.addEventListener('mouseenter', () => {
        newLi.classList.add("bg-warning");
    })
    newLi.addEventListener('mouseleave', () => {
        newLi.classList.remove("bg-warning");
    });
    let firstList = document.querySelector("#firstList");
    firstList.appendChild(newLi);

    let addBtn3 = newLi;
    addBtn3.addEventListener("click", () => {
        let newLi3 = document.createElement('li');
        newLi3.innerText = newLi.innerText;
        newLi3.classList.add("list-group-item");
        newLi3.classList.add("fs-5");

        newLi3.addEventListener('mouseenter', () => {
            newLi3.classList.add("bg-warning");
        })
        newLi3.addEventListener('mouseleave', () => {
            newLi3.classList.remove("bg-warning");
        });

        let secondList = document.querySelector("#secondList");
        secondList.appendChild(newLi3);
    });
});


let addBtn2 = document.querySelector("#secondListButton");

addBtn2.addEventListener("click", () => {
    let newLi2 = document.createElement('li');
    newLi2.innerText = document.querySelector("#secondListInput").value;
    newLi2.classList.add("list-group-item");
    newLi2.classList.add("fs-5");

    newLi2.addEventListener('mouseenter', () => {
        newLi2.classList.add("bg-warning");
    })
    newLi2.addEventListener('mouseleave', () => {
        newLi2.classList.remove("bg-warning");
    });
    let secondList = document.querySelector("#secondList");
    secondList.appendChild(newLi2);

    let addBtn4 = newLi2;
    addBtn4.addEventListener("click", () => {
        let newLi4 = document.createElement('li');
        newLi4.innerText = newLi2.innerText;
        newLi4.classList.add("list-group-item");
        newLi4.classList.add("fs-5");

        newLi4.addEventListener('mouseenter', () => {
            newLi4.classList.add("bg-warning");
        })
        newLi4.addEventListener('mouseleave', () => {
            newLi4.classList.remove("bg-warning");
        });

        let firstList = document.querySelector("#firstList");
        firstList.appendChild(newLi4);
    });
});