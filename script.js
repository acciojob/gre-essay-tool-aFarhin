//your code here
// function updateWordCount() {
// 			let text = document.getElementById("evaluatedText").value.trim();
// 			let wordCount = text.split(/\s+/).length;
// 			document.getElementById("wordCount").innerHTML = wordCount;
// 		}

 function countWords() {
      let text = document.getElementById("evaluatedText").value.trim();
      let wordCount = text.length > 0 ? text.match(/\S+/g).length : 0;
      document.getElementById("wordCount").textContent = wordCount;
    }

// function countWords() {
//   const text = document.getElementById("evaluatedText").value;
//   const wordCount = text.trim().split(/\s+/).length;
//   const displayCount = wordCount || 0; // if wordCount is falsy, display 0
//   document.getElementById("wordCount").innerHTML = displayCount;
// }
