document.addEventListener('DOMContentLoaded', () => {
            const confettiButton = document.getElementById('yes-btn');

            confettiButton.addEventListener('click', () => {
                // Do the actual work (e.g. submit form, save data) here first
                // ...
                
                // Then, trigger the celebration!
                const celebration = () => {
                    const duration = 2 * 1000;
                    const animationEnd = Date.now() + duration;
                    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                    }

                    const interval = setInterval(function() {
                        const timeLeft = animationEnd - Date.now();

                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }

                        const particleCount = 50 * (timeLeft / duration);
                        // since particles fall down, start a bit higher than random
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                    }, 250);
                };

                celebration();
            });
        });



const noBtn = document.getElementById("no-btn");

const moveBtn = () => {
  var x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  var y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

if (noBtn){
  noBtn.addEventListener('click', moveBtn);
  noBtn.addEventListener('mouseenter', moveBtn);
}

function animateCard() {
  var envelopeOpenBottom = document.getElementById("envelope-open-bottom");
  var candyHeart = document.getElementById("candy-heart");
  var envelopeOpenTop = document.getElementById("envelope-open-top");

  if (envelopeOpenBottom.style.display == "none") {
    envelopeOpenBottom.style.display = "block";
    envelopeOpenTop.style.display = "block";
    candyHeart.style.display = "block";
  }else {
    envelopeOpenBottom.style.display = "none";
    envelopeOpenTop.style.display = "none";
    candyHeart.style.display = "none";
  }
}