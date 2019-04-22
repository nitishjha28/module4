 var nombres = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim "];
    for (var i = 0; i < nombres.length; i++) {
        var principal = nombres[i].charAt(0).toLowerCase();
        if (principal === 'j') {
            console.log("Goodbye "+nombres[i]);
        } else {
            console.log("Hello "+nombres[i]);
        }
    }

    