import  { useEffect } from 'react';

const RandomToasts = () => {
  const toastQueue = [
    {
        message: "Free Cashout Methods 100 people are viewing free and working methods 2023",
      },
      {
        message: "Rueben in Madagascar purchased a Spamming Gold Package ",
      },
      {
        message: "Dumps  100 people are viewing it right now", 
      },
      {
        message: "Paypal Log 200 People are viewing it right now ",
      },
      {
        message: "Wes in Andorra purchased a Canada Cvv",
      },
      {
        message: "Maxwell from Arizon Purchased a Canadian Log",
      },
      {
        message: "Paid Tutorials 3 people just purchased a Tutorial an hour ago ",
        
      },
      {
        message: "Brandon in Hawaii purchased a cashapp log",
      },
      {
        message: "Calvin in New York  purchased a WESTERN UNION CARDING METHOD & WORKING BIN",
      },
      {
        message: "James from Arizona viewed a USA BANK LOG",
      },
      {
        message: "Caleb From UK  purchased a WoodForest Bank log",
      }
    
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const showRandomToasts = () => {
    shuffleArray(toastQueue);

    toastQueue.forEach((toast, index) => {
      setTimeout(() => {
        showCustomToast(toast.message, toast.imageUrl);
      }, index * 6000);
    });
  };

  useEffect(() => {
    showRandomToasts();
    
  }, []);

  const showCustomToast = (message) => {
    const toastContainer = document.getElementById('toast-container');
    if (toastContainer) {
      const toastElement = document.createElement('div');
      toastElement.className = 'custom-toast';
      toastElement.innerHTML = `<div class="toast-image"></div><div class="toast-message">${message}</div>`;
      toastContainer.appendChild(toastElement);

      setTimeout(() => {
        toastContainer.removeChild(toastElement);
      }, 5000); 
    }
  };

  return (
    <div id="toast-container" className="toast-container text-[#55ee50] mx-3 border-2 p-8 bg-[#ffffff]" >
      
    </div>
  );
};

export default RandomToasts;
