export class House {
    constructor(data) {
        this.id = data._id || data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
    }
}
// {
//     "_id": "67c76c0285d6f1c2c2f48d68",
//     "bedrooms": 1,
//     "bathrooms": 1,
//     "levels": 1,
//     "imgUrl": "https://images.unsplash.com/photo-1565190462842-d57a3e05de48?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwaG91c2V8ZW58MHx8MHx8fDI%3D",
//     "year": 2023,
//     "price": 10,
//     "description": "",
//     "creatorId": "67c7497b9d0ebdf64186d8d6",
//     "createdAt": "2025-03-04T21:09:22.925Z",
//     "updatedAt": "2025-03-04T21:09:22.925Z",
//     "__v": 0,
//     "creator": {
//         "_id": "67c7497b9d0ebdf64186d8d6",
//         "name": "SPEED DEMON 💖💓😍😻",
//         "picture": "https://plus.unsplash.com/premium_photo-1694626257552-576f66149ca8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVtb258ZW58MHx8MHx8fDA%3D",
//         "id": "67c7497b9d0ebdf64186d8d6"
//     },
//     "id": "67c76c0285d6f1c2c2f48d68"
// }