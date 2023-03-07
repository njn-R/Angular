import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class AppTest {
    myId = "newId"
    isDisabled:boolean = false
    toggleI:boolean = true

    imgsrc = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
    imgsrc2 = "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"

    greet() {
        console.log("Good Morning")
    }

    toggleImg() {
        // this.toggleI = !this.toggleI;

        if (this.toggleI) {
            this.imgsrc2 = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
            this.toggleI = false
        }
        else {
            this.imgsrc2 = "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
            this.toggleI = true
        }
    }

    write() {
        console.log("tested")
    }

}