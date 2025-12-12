// Variable untuk simpan hasil fetch
let fetchedData = null;

// Generate unique name untuk pertandingan
window.generateUniqueName = function() {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[-:]/g, '');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const uniqueName = `MATCH-${timestamp}-${random}`;
    
    document.getElementById('namaPertandingan').value = uniqueName;
    
    // Feedback visual
    const input = document.getElementById('namaPertandingan');
    input.classList.add('ring-2', 'ring-blue-400');
    setTimeout(() => {
        input.classList.remove('ring-2', 'ring-blue-400');
    }, 500);
};

// Expose fetchData ke global scope
window.fetchData = async function() {
    const url = document.getElementById('fetchUrl').value;
    const resultDiv = document.getElementById('fetchResult');
    
    if (!url) {
        alert('Masukkan URL dulu ya bro! 💀');
        return;
    }

    resultDiv.innerHTML = '<p class="text-[#0c0554] text-center font-semibold">Loading... ⏳</p>';
    resultDiv.classList.remove('hidden');

    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        
        let data;
        let formattedData;

        // Check if response is JSON
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
            // Format JSON dengan indentasi 2 spasi biar rapi
            formattedData = JSON.stringify(data, null, 2);
        } else {
            // Kalo bukan JSON, ambil sebagai text
            data = await response.text();
            formattedData = data;
        }
        
        // Simpan data ke variable global
        fetchedData = data;
        
        // Display dengan pre tag biar formatting tetap
        resultDiv.innerHTML = `
            <pre class="text-sm text-gray-800 whitespace-pre-wrap break-words">${formattedData}</pre>
        `;
    } catch (error) {
        fetchedData = null;
        resultDiv.innerHTML = `
            <p class="text-red-500 font-semibold">Error: ${error.message} 😭</p>
        `;
    }
};

document.getElementById('matchForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const pushToPostMatch = document.getElementById('pushToPostMatch').checked;
    
    const formData = {
        namaPertandingan: document.getElementById('namaPertandingan').value,
        jumlahGame: document.getElementById('jumlahGame').value,
        matchKe: document.getElementById('matchKe').value,
        gameKe: document.getElementById('gameKe').value,
        namaTimA: document.getElementById('namaTimA').value,
        namaTimB: document.getElementById('namaTimB').value,
        tipeMatch: document.getElementById('tipeMatch').value,
        fetchUrl: document.getElementById('fetchUrl').value,
        fetchedData: fetchedData,  // Include hasil fetch data
        pushToPostMatch: pushToPostMatch
    };

    console.log('Form Data:', formData);
    console.log('Push to PostMatch enabled?', pushToPostMatch);
    console.log('JSON Format:', JSON.stringify(formData, null, 2));
    
    // Check if pushToPostMatch is enabled
    console.log('🚀 Starting POST request to /api/postMatch...');
    try {
        console.log('Sending payload:', formData);
        const response = await fetch('/api/postMatch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (response.ok) {
            const result = await response.json();
            alert('✅ Data berhasil dikirim ke Post Match Visual! 🚀');
            console.log('✅ API Response:', result);
        } else {
            const error = await response.text();
            alert(`❌ Error: ${response.status} - ${error}`);
            console.error('❌ API Error:', error);
        }
    } catch (error) {
        alert(`❌ Network Error: ${error.message}`);
        console.error('❌ Fetch Error:', error);
    }
});