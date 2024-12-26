document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById('toc');  // Conteneur où on insère le sommaire
    const headings = document.querySelectorAll('h2, h3'); // On sélectionne toutes les balises h2 et h3
    const tocList = document.createElement('ul'); // Création de la liste du sommaire

    headings.forEach((heading) => {
        const headingText = heading.textContent;  // Le texte du titre (pour l'affichage dans le sommaire)
        const headingId = heading.id || headingText.replace(/\s+/g, '-').toLowerCase(); // Générer un ID si non défini

        if (!heading.id) {
            heading.id = headingId;  // Si l'élément n'a pas d'ID, on le crée
        }

        // Créer un élément de liste pour chaque titre
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', `#${heading.id}`);  // Créer le lien vers l'ID
        link.textContent = headingText;  // Ajouter le texte du titre

        listItem.appendChild(link);  // Ajouter le lien à l'élément de liste
        tocList.appendChild(listItem);  // Ajouter l'élément de liste à la liste du sommaire
    });

    tocContainer.appendChild(tocList);  // Ajouter la liste complète au conteneur du sommaire
});

MathJax.Hub.Config({
    CommonHTML: {
      scale: 1
    }
  });