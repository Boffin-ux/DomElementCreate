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
         document.body.append(div);
      } else if (this.selector[0] === '#') {
         const p = document.createElement('p');
         this.createCssText(p);
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
   }
   const domElement = new DomElement();
   domElement.addElement();

});