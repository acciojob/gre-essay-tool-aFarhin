//your code here
function updateWordCount() {
			let text = document.getElementById("evaluatedText").value.trim();
			let wordCount = text.split(/\s+/).length;
			document.getElementById("wordCount").innerHTML = wordCount;
		}