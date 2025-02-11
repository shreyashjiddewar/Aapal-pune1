

 ////...........................       Search bar           ........................ /////




const cafes = [
    {
        name: "Cafe Katha",
        address: "Cafe Kathaa, F C Road, Lane, opposite Hotel Vaishali, next to Old building of British Library, Ganeshwadi, Pune, Maharashtra 411004",
        imageUrl: "Katha.jpg",
        mapUrl: "https://www.google.com/maps/dir/18.644992,73.760768/cafe+kathaa+map/@18.5823611,73.72569,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2bf8e9410e745:0x574bbc1234760774!2m2!1d73.8405691!2d18.520764?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
    },
    {
        name: "Cafe Buddy's Espresso",
        address: "Shivala Colony, Gurudwara Colony, Nigdi, Pimpri-Chinchwad, Maharashtra 411044",
        imageUrl: "Cafe Buddy's Espresso.jpg",
        mapUrl: "https://www.google.com/maps/place/Cafe+Buddy's+Espresso+-+Ravet/@18.6445108,73.7574615,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOzna4uqrzeGkqsaaiTWbHs-daolh3SBN-Fd9LD!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOzna4uqrzeGkqsaaiTWbHs-daolh3SBN-Fd9LD%3Dw114-h86-k-no!7i8384!8i6288!4m7!3m6!1s0x3bc2b9f1b1b7fee5:0xe4b6dc9b2fe4b413!8m2!3d18.6445108!4d73.7574615!10e5!16s%2Fg%2F11b6s5qm0x?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
    },

    
    {
      name: "Camp Burger",
      address: "2394, East St, Solapur Bazar, Camp, Pune, Maharashtra 411001",
      imageUrl: "camp.jpg",
      mapUrl: "https://www.google.com/maps/place/Cafe+Buddy's+Espresso+-+Ravet/@18.6445108,73.7574615,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOzna4uqrzeGkqsaaiTWbHs-daolh3SBN-Fd9LD!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOzna4uqrzeGkqsaaiTWbHs-daolh3SBN-Fd9LD%3Dw114-h86-k-no!7i8384!8i6288!4m7!3m6!1s0x3bc2b9f1b1b7fee5:0xe4b6dc9b2fe4b413!8m2!3d18.6445108!4d73.7574615!10e5!16s%2Fg%2F11b6s5qm0x?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
  },

  {
    name: "Crazy Cheesy",
    address: "Crazy Cheesy, Khau Galli, 861, Barister Gadgil Rd, Sadashiv Peth, Pune, Maharashtra 411030",
    imageUrl: "Crazy.jpg",
    mapUrl: "https://www.google.com/maps/place/Cafe+Kathaa/@18.520764,73.8379942,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf8e9410e745:0x574bbc1234760774!8m2!3d18.520764!4d73.8405691!16s%2Fg%2F11f9vjwq1l?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
},
{
    name: "Cafe Buddy's Espresso",
    address: "Shivala Colony, Gurudwara Colony, Nigdi, Pimpri-Chinchwad, Maharashtra 411044",
    imageUrl: "Cafe Buddy's Espresso.jpg",
    mapUrl: "https://www.google.com/maps/place/Cafe+Buddy's+Espresso+-+Ravet/@18.6445108,73.7574615,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOzna4uqrzeGkqsaaiTWbHs-daolh3SBN-Fd9LD!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOzna4uqrzeGkqsaaiTWbHs-daolh3SBN-Fd9LD%3Dw114-h86-k-no!7i8384!8i6288!4m7!3m6!1s0x3bc2b9f1b1b7fee5:0xe4b6dc9b2fe4b413!8m2!3d18.6445108!4d73.7574615!10e5!16s%2Fg%2F11b6s5qm0x?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
},


{
  name: "Cafe Rich",
  address: "Firste Floor, Blooming Dale, beside Domino's Pizza, Sector 32 A, Ravet, Pune, Pimpri-Chinchwad, Maharashtra 412101",
  imageUrl: "Rich Cafe.jpg",
  mapUrl: "https://www.google.com/maps/place/RICH+CAFE/@18.6430166,73.7531822,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b95ad5148ccd:0xde4babc0f1c0f943!8m2!3d18.6430166!4d73.7557571!16s%2Fg%2F11y468rdxn?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
},


];
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const cafeList = document.getElementById('cafe-list');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    cafeList.innerHTML = '';

    cafes.forEach(cafe => {
        if (cafe.name.toLowerCase().includes(searchTerm)) {
            const cafeItem = document.createElement('div');
            cafeItem.classList.add('cafe-item');

            const cafeName = document.createElement('h3');
            cafeName.classList.add('cafe-name');
            cafeName.textContent = cafe.name;

            const cafeAddress = document.createElement('p');
            cafeAddress.classList.add('cafe-address');
            cafeAddress.textContent = cafe.address;

            const cafeImage = document.createElement('img');
            cafeImage.classList.add('cafe-image');
            cafeImage.src = cafe.imageUrl;

            const cafeMap = document.createElement('iframe');
            cafeMap.classList.add('google-map');
            cafeMap.src = cafe.mapUrl;

            cafeItem.appendChild(cafeName);
            cafeItem.appendChild(cafeAddress);
            cafeItem.appendChild(cafeImage);
            cafeItem.appendChild(cafeMap);

            cafeList.appendChild(cafeItem);
        }
    });
});




////...........................        Card           ........................ /////



const mapButtons = document.querySelectorAll('.cafe-map-button');

mapButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cafeName = button.parentElement.querySelector('.CafeKatha').textContent;
    const mapUrl = 'https://www.google.com/maps/place/Cafe+Kathaa/@18.520764,73.8379942,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf8e9410e745:0x574bbc1234760774!8m2!3d18.520764!4d73.8405691!16s%2Fg%2F11f9vjwq1l?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'; 
    window.open(mapUrl, '_blank'); 
  });
});







 ////...........................        Famous Place in pune            ........................ /////

const highlights = document.querySelectorAll('.highlight');
let currentHighlight = 0;

function showHighlight() {
    highlights.forEach((highlight, index) => {
        if (index === currentHighlight) {
            highlight.classList.add('active');
        } else {
            highlight.classList.remove('active');
        }
    });
}

setInterval(() => {
    currentHighlight = (currentHighlight + 1) % highlights.length;
    showHighlight();
}, 1500); // Change highlight every 3 seconds




 ////...........................        Ai Guid            ........................ /////

 const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages');

const apiKey = "AIzaSyCb0s1Fvz0CwDj1-t9_Fe2AV1iFfLdcH44"; // Replace with your actual API key

async function getAIResponse(query) {
  try {
    const response = await fetch(`https://language.googleapis.com/v1/documents:analyzeSentiment?key=${AIzaSyCb0s1Fvz0CwDj1-t9_Fe2AV1iFfLdcH44}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        document: {
          content: query,
          type: 'PLAIN_TEXT',
        },
      }),
    });

    const data = await response.json();

    // Process the response (e.g., extract sentiment, entities)
    // For this example, we'll simply return a generic response
    return `You asked: "${query}". I'm still under development. Here are some popular places in Pune: Shaniwar Wada, Aga Khan Palace, Osho International Meditation Resort.`;

  } catch (error) {
    console.error('Error fetching AI response:', error);
    return "I'm having trouble understanding. Please try again later.";
  }
}

sendButton.addEventListener('click', async () => {
    const userMessage = userInput.value;

    if (userMessage.trim() === '') {
        return;
    }

    // Create user message element
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessage;
    chatMessages.appendChild(userMessageElement);

    // Get AI response
    const aiResponse = await getAIResponse(userMessage);

    // Create AI message element
    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('ai-message');
    aiMessageElement.textContent = aiResponse;
    chatMessages.appendChild(aiMessageElement);

    userInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
});