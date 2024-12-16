document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('changingText');
    const words = ['PROGRAMMER', 'DESIGNER'];
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % words.length;
      textElement.style.transition = "transform 0.8s ease-in-out";
      textElement.style.transform = "translateY(100%)";
      
      setTimeout(() => {
        textElement.textContent = words[index];
        textElement.style.transition = "none";
        textElement.style.transform = "translateY(-100%)";
  
        setTimeout(() => {
          textElement.style.transition = "transform 0.8s ease-in-out";
          textElement.style.transform = "translateY(0)";
        }, 100);  
      }, 800);  
    }, 3000);  
  });