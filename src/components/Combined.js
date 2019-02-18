import originalArticles from "../json/Publications/originalArticles";
import reviewArticles from "../json/Publications/reviewArt.json";
import books from "../json/Publications/books.json";
import bookChapters from "../json/Publications/bookChapters.json";
import invitedArticles from "../json/Publications/invitedArticles.json";
import letterstoEditor from "../json/Publications/letterstoEdi.json";
import educationalMaterials from "../json/Publications/educationalMaterials.json";
// import $ from "jquery";

    function allData() {
        let combinedData = [];
        combinedData.push(originalArticles);
        combinedData.push(reviewArticles);
        combinedData.push(books);
        combinedData.push(bookChapters);
        combinedData.push(invitedArticles);
        combinedData.push(letterstoEditor);
        combinedData.push(educationalMaterials);

        // combinedData = combinedData.concat(originalArticles, reviewArticles);
        // combinedData = Object.assign({}, originalArticles, reviewArticles) 
        let newData = []
        // console.log(combinedData)
        // combinedData.keys(elem => newData.push(elem))     
        // console.log(newData)
        // return newData;
        combinedData.map(firstLayer => 
                        (firstLayer.articles.map(
                                    secondLayer => (newData.push(secondLayer))
                                    )))
        // let newData = combinedData.reduce(function(accumulator, currentValue) {
        //     return accumulator.concat(currentValue)}, []
        // )
        console.log(newData)
        return newData;
    }

    export default allData();
