"use strict";
document.addEventListener('DOMContentLoaded', function () {

   const DomElement = function () {
      this.selector = '#Block';
      this.height = 100;
      this.width = 100;
      this.bg = '#73b773';
      this.fontSize = 30;
   };
   DomElement.prototype.addElement = function () {
      if (this.selector[0] === '.') {
         const div = document.createElement('div');
         this.createCssText(div);
         this.eventsKeydown(div);
         document.body.append(div);
      } else if (this.selector[0] === '#') {
         const p = document.createElement('p');
         this.createCssText(p);
         this.eventsKeydown(p);
         document.body.append(p);
      } else {
         alert('Ошибка ввода');
      }
   };
   DomElement.prototype.createCssText = function (selectorBlock) {
      const getSelector = this.selector.slice(1);
      selectorBlock.innerHTML = `"${getSelector}"`;
      selectorBlock.style.display = 'flex';
      selectorBlock.style.justifyContent = 'center';
      selectorBlock.style.alignItems = 'center';
      selectorBlock.classList.add(getSelector);
      selectorBlock.style.height = `${this.height}px`;
      selectorBlock.style.width = `${this.width}px`;
      selectorBlock.style.background = this.bg;
      selectorBlock.style.fontSize = `${this.fontSize}px`;
      selectorBlock.style.position = 'absolute';
      // selectorBlock.style.top = '0';
      // selectorBlock.style.left = '0';
   };

   DomElement.prototype.eventsKeydown = function (selector) {
      selector.style.top = 0;
      selector.style.left = 0;
      let bottomSum = 0,
         topSum = 0,
         leftSum = 0,
         rightSum = 0;
      document.addEventListener('keydown', function (event) {
         if (event.code === 'ArrowUp') {
            bottomSum += 10;
            topSum -= 10;
            selector.style.top = `${topSum}px`;
            selector.style.bottom = `${bottomSum}px`;
         } else if (event.code === 'ArrowDown') {
            bottomSum -= 10;
            topSum += 10;
            selector.style.top = `${topSum}px`;
            selector.style.bottom = `${bottomSum}px`;
         } else if (event.code === 'ArrowRight') {
            leftSum += 10;
            rightSum -= 10;
            selector.style.right = `${rightSum}px`;
            selector.style.left = `${leftSum}px`;
         } else if (event.code === 'ArrowLeft') {
            leftSum -= 10;
            rightSum += 10;
            selector.style.right = `${rightSum}px`;
            selector.style.left = `${leftSum}px`;
         }
      });
   };

   const domElement = new DomElement();
   domElement.addElement();

});