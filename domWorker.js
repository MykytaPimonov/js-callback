document.addEventListener("DOMContentLoaded", function() {
    let currentNode = document.body;
    function traverseDOM(node, callback) {
        alert(`Current node: ${node.nodeName}\nInner:\n${node.textContent || 'empty'}`);

        if (node.hasChildNodes()) {
            const choice = prompt("Choose an action: (next: 'n', previous: 'p', stop: 's')");

              if (choice === 'n') {
                if (node.firstChild) {
                  callback(node.firstChild, callback);
                } else {
                  callback(node.parentNode, callback);
                }
              } else if (choice === 'p') {
                if (node.parentNode) {
                  callback(node.parentNode, callback);
                } else {
                  alert("It is root.");
                  callback(node, callback);
                }
              } else if (choice === 's') {
                alert("Stopping traversal.");
              } else {
                alert("Invalid input. Stopping traversal.");
              }    
        } else {
            let exitChoice = confirm("It is leaf. Go back?");

            if (exitChoice) {
                if (node.parentNode && node.parentNode !== document) {
                    callback(node.parentNode);
                } else {
                  alert("It is root.");
                    callback(node);
                }
            } else {
                alert("Stopping traversal.");
            }
        }
    }

    function navigateToNode(node) {
        traverseDOM(node, navigateToNode);
    }

    navigateToNode(currentNode);
});

