const userDatas = [
        {
            id: 1,
            gender: "male",
            name: "varun",
            photoUrl : "https://images.pexels.com/photos/808724/pexels-photo-808724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Black Formals",
            description: "i love black, so a black blazzer with black trouser suits me more.",
            category: "marrige-dress"

        },
        {
            id: 2,
            gender: "male",
            name: "vivek",
            photoUrl: "https://images.pexels.com/photos/7669969/pexels-photo-7669969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "classic mundu and shirt",
            description: "mundu and shirt is an emmotion, so why not as a marrige outfit",
            category: "marrige-dress"

        },
        {
            id: 3,
            gender: "male",
            name: "wrenold",
            photoUrl: "https://images.pexels.com/photos/12713397/pexels-photo-12713397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Sharwani with hat",
            description: "sharwani is my all time favourite, my equaltion is no sharwani no wedding",
            category: "marrige-dress"

        },
        {
            id: 4,
            gender: "male",
            name: "jobin",
            photoUrl: "https://images.pexels.com/photos/12871324/pexels-photo-12871324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "navy is Classy",
            description: "everytime i go for shopping, if its navy? i will buy it",
            category: "marrige-dress"

        },
        {
            id: 5,
            gender: "female",
            name: "mariya",
            photoUrl : "https://images.pexels.com/photos/15026768/pexels-photo-15026768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "lehenga",
            description: "what ever the climate is, lehenga for wedding is must",
            category: "marrige-dress"

        },
        {
            id: 6,
            gender: "female",
            name: "sushma",
            photoUrl: "https://images.pexels.com/photos/13849008/pexels-photo-13849008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Saree",
            description: "my taste is on saree, what about yours?",
            category: "marrige-dress"

        },
        {
            id: 7,
            gender: "female",
            name: "sneha",
            photoUrl: "https://images.pexels.com/photos/1635664/pexels-photo-1635664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Black Gown",
            description: "i found my true love, its gown.",
            category: "marrige-dress"

        },
        {
            id: 8,
            gender: "female",
            name: "aysha",
            photoUrl: "https://images.pexels.com/photos/7200995/pexels-photo-7200995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "salwar",
            description: "i feel more comfortable in salwar all the day",
            category: "marrige-dress"

        },
        {
            id: 9,
            gender: "male",
            name: "salman",
            photoUrl : "https://images.pexels.com/photos/12779717/pexels-photo-12779717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Kurta",
            description: "the best and comfortable outfit for me is kurta",
            category: "marrige-dress"

        },
        {
            id: 10,
            gender: "female",
            name: "maya",
            photoUrl: "https://images.pexels.com/photos/13626431/pexels-photo-13626431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "churidar",
            description: "all day, every day... churidar is the best for me",
            category: "marrige-dress"

        },
        {
            id: 11,
            gender: "male",
            name: "arman",
            photoUrl: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Formals with a sunglasses",
            description: "the best outfit for a anniversary is ofcourse a formals with a black shade sunglases",
            category: "anniversary-outfits"

        },
        {
            id: 12,
            gender: "male",
            name: "raj",
            photoUrl: "https://images.pexels.com/photos/9064117/pexels-photo-9064117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "simple kurta",
            description: "outfit is important, so for me kurta",
            category: "anniversary-outfits"

        },
        {
            id: 13,
            gender: "male",
            name: "arfath",
            photoUrl: "https://images.pexels.com/photos/6578473/pexels-photo-6578473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "shirt and pants",
            description: "i prefer a decent looking shirt and a plain pants",
            category: "anniversary-outfits"

        },
        {
            id: 14,
            gender: "male",
            name: "anand",
            photoUrl: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "formals",
            description: "formals with a smile is what goes well on me",
            category: "anniversary-outfits"

        },
        {
            id: 15,
            gender: "male",
            name: "malik",
            photoUrl: "https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Semi-formal shit with trousers",
            description: "why so formal or why not formals. for me its semi-formal",
            category: "anniversary-outfits"

        },
        {
            id: 16,
            gender: "female",
            name: "neha",
            photoUrl: "https://images.pexels.com/photos/8819319/pexels-photo-8819319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "choli lehenga",
            description: "Flowers are beautiful, so as i am in choli lehenga",
            category: "anniversary-outfits"

        },
        {
            id: 17,
            gender: "female",
            name: "ramya",
            photoUrl: "https://images.pexels.com/photos/12888721/pexels-photo-12888721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "churidar",
            description: "a nice bordered churidar along with heals makes my day",
            category: "anniversary-outfits"

        },
        {
            id: 18,
            gender: "female",
            name: "saloni",
            photoUrl: "https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "blouse and skirt",
            description: "a rose red skirt is muy favourite and a black blouse is its pair",
            category: "anniversary-outfits"

        },
        {
            id: 19,
            gender: "female",
            name: "saloni",
            photoUrl: "https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "blouse and skirt",
            description: "a rose red skirt is muy favourite and a black blouse is its pair",
            category: "anniversary-outfits"

        },
        {
            id: 20,
            gender: "female",
            name: "mohini",
            photoUrl: "https://images.pexels.com/photos/12707148/pexels-photo-12707148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "saree and blouse",
            description: "saree with a blue is what make me look beautiful",
            category: "anniversary-outfits"

        },
        {
            id: 21,
            gender: "male",
            name: "manu",
            photoUrl: "https://images.pexels.com/photos/3707987/pexels-photo-3707987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "formals with blazzer",
            description: "the dress i prefer when i go for an function is formals",
            category: "birthday-dress"

        },
        {
            id: 22,
            gender: "male",
            name: "akhil",
            photoUrl: "https://images.pexels.com/photos/9219033/pexels-photo-9219033.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "shirt and jeans",
            description: "jeans is my all day wear, and for a birthday i will pair it with a simple shirt",
            category: "birthday-dress"

        },
        {
            id: 23,
            gender: "male",
            name: "vishnujith",
            photoUrl: "https://images.pexels.com/photos/12712899/pexels-photo-12712899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "t-shirt jeans and a cap",
            description: "looking cool is my style, a loose tshirt with a blue jeans and a cap is must ",
            category: "birthday-dress"

        },
        {
            id: 24,
            gender: "male",
            name: "nawas",
            photoUrl: "https://images.pexels.com/photos/14754552/pexels-photo-14754552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "hoodie and jeans",
            description: "fashion and look is important for me, hoodie goes well on me",
            category: "birthday-dress"

        },
        {
            id: 25,
            gender: "male",
            name: "sohan",
            photoUrl: "https://images.pexels.com/photos/5264934/pexels-photo-5264934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "formals",
            description: "a decent look is what i prefer, so this formals looks perfect",
            category: "birthday-dress"

        },
        {
            id: 26,
            gender: "female",
            name: "sushma",
            photoUrl: "https://images.pexels.com/photos/2076768/pexels-photo-2076768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "short mini dress",
            description: "a short mini dress with a demin jacket is the best outfit for me",
            category: "birthday-dress"

        },
        {
            id: 27,
            gender: "female",
            name: "rachita",
            photoUrl: "https://images.pexels.com/photos/7481988/pexels-photo-7481988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "mini skirt",
            description: "a mini skirt with a plain mini top goes well for me",
            category: "birthday-dress"

        },
        {
            id: 28,
            gender: "female",
            name: "veronica",
            photoUrl: "https://images.pexels.com/photos/14868679/pexels-photo-14868679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "bodycon outfit",
            description: "a perfect fit bodycon outfit is the one for a birthday party",
            category: "birthday-dress"

        },
        {
            id: 29,
            gender: "female",
            name: "riya",
            photoUrl: "https://images.pexels.com/photos/5922730/pexels-photo-5922730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "gown",
            description: "a gown with good work on it will be an attractive one. thats my taste",
            category: "birthday-dress"

        },
        {
            id: 30,
            gender: "female",
            name: "marfiya",
            photoUrl: "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "churidar",
            description: "a simple looking traditional churidar with some work is what i prefer",
            category: "birthday-dress"

        },
        {
            id: 31,
            gender: "male",
            name: "saroosh",
            photoUrl: "https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "shirt with trousers",
            description: "a plain shirt tucked in trousers looks cool for a college fest",
            category: "college-fest-dress"
        
        },
        {
            id: 32,
            gender: "male",
            name: "aman shetty",
            photoUrl: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "t-shirt with jeans",
            description: "a simple t-shirt and a jeans. thats my comfort",
            category: "college-fest-dress"
        
        },
        {
            id: 33,
            gender: "male",
            name: "ashmal",
            photoUrl: "https://images.pexels.com/photos/3037549/pexels-photo-3037549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "hoodie with jeans",
            description: "if iths college fest, hoodie is must",
            category: "college-fest-dress"
        
        },
        {
            id: 34,
            gender: "male",
            name: "suhas malya",
            photoUrl: "https://images.pexels.com/photos/5554265/pexels-photo-5554265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "hoodie with jeans",
            description: "if iths college fest, hoodie is must",
            category: "college-fest-dress"
        
        },
        {
            id: 35,
            gender: "male",
            name: "karan vinay",
            photoUrl: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "polo t-shirt with blazzer and jeans",
            description: "when i comes to college fest, nothing goes without blazzer and a dark jean",
            category: "college-fest-dress"
        
        },
        {
            id: 36,
            gender: "female",
            name: "arthana",
            photoUrl: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Skirt",
            description: "a cute looking skirt makes me looks cute.",
            category: "college-fest-dress"
        
        },
        {
            id: 37,
            gender: "female",
            name: "kavya",
            photoUrl: "https://images.pexels.com/photos/3250718/pexels-photo-3250718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "t-shirt with denim jacket and jeans",
            description: "i want to look classy always, i choose a plain tee with a demin jacket and jeans",
            category: "college-fest-dress"
        
        },
        {
            id: 38,
            gender: "female",
            name: "sahana",
            photoUrl: "https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "long skirt",
            description: "a long simple plain skirt is best outfit for a college fest",
            category: "college-fest-dress"
        
        },
        {
            id: 39,
            gender: "female",
            name: "bavani",
            photoUrl: "https://images.pexels.com/photos/10198957/pexels-photo-10198957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "shirt and jeans",
            description: "i perfer little dark colors, so an unbuttoned shirt with an inner garment and jeans for a college fest",
            category: "college-fest-dress"
        
        },
        {
            id: 40,
            gender: "female",
            name: "nidhi agarwal",
            photoUrl: "https://images.pexels.com/photos/1670512/pexels-photo-1670512.jpeg",
            title: "shirt and jeans",
            description: "i perfer little dark colors, so an unbuttoned shirt with an inner garment and jeans for a college fest",
            category: "college-fest-dress"
        
        }
    ]


export default userDatas