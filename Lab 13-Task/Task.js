// Clase Task
class Task {
    constructor(description, status) {
      this.description = description;
      this.status = status;
    }
  
    html(pos) {
      const id = `task-${pos}`;
      let forwardButton = '';
      let backwardButton = '';
  
      if (this.status === 'TODO') {
        forwardButton = `<button onclick="goForward(${pos})" class="btn-blue"></button>`;
        backwardButton = `<button onclick="goBackward(${pos})" class="btn-red"></button>`;
      } else if (this.status === 'DOING') {
        forwardButton = `<button onclick="goForward(${pos})" class="btn-blue"></button>`;
        backwardButton = `<button onclick="goBackward(${pos})" class="btn-red"></button>`;
      } else if (this.status === 'DONE') {
        forwardButton = `<button onclick="goForward(${pos})" class="btn-blue"></button>`;
        backwardButton = `<button onclick="goBackward(${pos})" class="btn-red"></button>`;
      }
  
      return `
        <div id="${id}" class="task">
          <p>${this.description}</p>
       
          <div class="buttons">
            ${forwardButton}
            ${backwardButton}
            <button onclick="deleteComment(${pos})" class="btn-delete">x</button>
            
          </div>
        </div>
      `;
    }
  }
  