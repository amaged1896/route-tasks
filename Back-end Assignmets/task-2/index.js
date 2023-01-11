const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());
const users = [
    {
        name: 'sara',
        age: 26,
        id: 1,
    },
    {
        name: 'mohamed',
        age: 22,
        id: 2,
    },
    {
        name: 'hossam',
        age: 26,
        id: 3,
    },
    {
        name: 'ibrahem',
        age: 26,
        id: 4,
    },
    {
        name: 'mahmoud',
        age: 26,
        id: 5,
    },
];

const posts = [
    {
        userId: 1,
        id: 1,
        title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
    {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    },
    {
        userId: 1,
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    },
    {
        userId: 1,
        id: 7,
        title: 'magnam facilis autem',
        body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
    },
    {
        userId: 1,
        id: 8,
        title: 'dolorem dolore est ipsam',
        body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
    },
    {
        userId: 1,
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
    },
    {
        userId: 1,
        id: 10,
        title: 'optio molestias id quia eum',
        body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
    },
];

// User endpoints
// get all users
app.get('/users', (req, res) => res.json({ users }));

// Add a new user
app.post('/users/add', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({ newUser });
});
// Get all users sorted alphabetically by name
app.get('/users/sorted', (req, res) => {
    const userCopy = [...users];
    const userSorted = userCopy.sort((a, b) => (a.name <= b.name ? -1 : 1));
    return res.json({ users: userSorted });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const deletedUser = users.find((element) => {
        return element.id == id;
    });
    if (deletedUser) {
        users.splice(users.indexOf(deletedUser), 1);
        return res.json({ user: deletedUser });
    } else {
        return res.status(404).send('user not found');
    }
});

// Update a user by ID


// Search for a user by ID
app.get('/users/search/:id', (req, res) => {
    const id = req.params.id;
    const searchById = users.find((element) => {
        return element.id == id;
    });
    return res.json({ user: searchById });
});

// Post endpoints
// get all posts
app.get('/posts', (req, res) => res.json(posts));

// Add a new post
app.post('/posts/add', (req, res) => {
    const newPost = req.body;
    posts.push(newPost);
    res.json({ newPost });
});

// Get all posts in reverse order (without modifying the original array)
app.get('/posts/reversed', (req, res) => {
    return reversedPosts = [...posts].reverse();
});

// Delete a post by ID
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const deletedPost = posts.find((element) => {
        return element.id == id;
    });
    if (deletedPost) {
        posts.splice(posts.indexOf(deletedPost), 1);
        return res.json({ post: deletedPost });
    } else {
        return res.send('post not found');
    }
});

// Update a post by ID
// app.post(`/posts/:id`,(req,res)=>{
//     let bufferData 
//     let id = req.query.id
//           req.on("data",(chunk)=>{
//               bufferData = chunk
//           })
//           req.on("end",()=>{
//             const convertedBufferData = JSON.parse(bufferData)
//             for (let i = 0; i < user.length; i++) {
//               if (user[i].id == parseInt(id)){
//                 user[i]=convertedBufferData
//               }
//             }
//             return res.json({user});
//         })
//   })

// Search for a post by ID
app.get('/posts/search/:id', (req, res) => {
    const id = req.params.id;
    const searchById = posts.find((element) => {
        return element.id == id;
    });
    return res.json({ post: searchById });
});

app.listen(port, () => console.log('Server listening on port 5000!'));