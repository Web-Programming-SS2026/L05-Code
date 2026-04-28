export default class Converter {
  constructor() {
    this.converter = document.forms.converter;

    this.handleClick = this.handleClick.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);

    this.converter.convert.addEventListener("click",this.handleClick);
    this.converter.convertBack.addEventListener("click",this.handleClickBack);
  }

  handleClick(event) {
    event.preventDefault();
    let inch = this.converter.us.valueAsNumber;
    let cm = inch * 2.54;
    this.converter.metric.value = cm;
  }

  handleClickBack(event) {
    event.preventDefault();
    let cm = this.converter.metric.valueAsNumber;
    let inch = cm / 2.54;
    this.converter.us.value = inch;
  }

}

let app = new Converter();
window.app = app;
