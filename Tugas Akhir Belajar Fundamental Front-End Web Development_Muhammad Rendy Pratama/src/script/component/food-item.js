class FoodItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    set food(food) {
      this._food = food;
      this.render();
    }
   
    render() {
        this.shadowDOM.innerHTML = `
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              color: #AEBDCA;
            }
            :host {
              display: block;
              margin-bottom: 18px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              overflow: hidden;
            }
            .image-food {
              width: 100%;
              max-height: 300px;
              object-fit: cover;
              object-position: center;
            }
            .food-info {
              padding: 24px;
            }
            .food-info > h2 {
              font-weight: bold;
            }
            
            .food-info > p {
              margin-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10; 
            }
          </style>
          
          <img class="image-food" src="${this._food.strMealThumb}" alt="Image">
          <div class="food-info">
            <h2>${this._food.strMeal}</h2>
          </div>
        `;
      }
    }
   
  customElements.define('food-item', FoodItem);