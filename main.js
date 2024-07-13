const data = [
  {
    id: 1,
    title: "Something Big is cooking up",
    isClicked: true,
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
  },
  {
    id: 2,
    isClicked: true,
    title: "Where does it come from?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
  },
  {
    id: 3,
    isClicked: false,
    title: "Custom attributes prefixed with",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
  },
  {
    id: 31,
    isClicked: false,
    title: "prefixed with",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
  },
  {
    id: 13,
    isClicked: false,
    title: "Custom  prefixed with",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
  }
];
(function () {
  const container = document.getElementById("container-card");
  let state = {
    accordionData: data
  };

  function viewAccordion() {
    let html = ``;
    state.accordionData.forEach((el) => {
      html += `
        <div id="accordion">
          <h3>
          ${el.title}
            <span><button data-id=${el.id}  class="toggle">${
        el.isClicked ? "close" : "open"
      }</button></span>
          </h3>
          <p class="accordion-content">
           ${el.isClicked ? el.description : ""}
          </p>
        </div>
        `;
    });
    container.innerHTML = html;
  }
  viewAccordion();
  function handleClick(e) {
    if (e.target.classList.contains("toggle")) {
      let idx = e.target.dataset.id;
      const id = Number(idx);
      const copyAccordion = [...state.accordionData];

      const newAccordion = copyAccordion.map((el) => {
        return {
          ...el,
          isClicked: el.id === id ? !el.isClicked : false
        };
      });

      // newAccordionSingle
      // const newAccordionSingle = copyAccordion.map((el) => {
      //   if (el.id === id) {
      //     return {
      //       ...el,
      //       isClicked: !el.isClicked
      //     };
      //   } else {
      //     return el;
      //   }
      // });
      state.accordionData = newAccordion;
      viewAccordion();
    }
  }

  document
    .getElementById("container")
    .addEventListener("click", (e) => handleClick(e));
})();
