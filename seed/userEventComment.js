const { Event, Comment, User } = require('../models')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

const main = async () => {
    const user1 = await new User({
        username: 'Anatoliy8',
        email: 'Anatoliy8@test.com',
        password: '1234'
    })
    user1.save()
    const user2 = await new User({
        username: 'Jordan7',
        email: 'Jordan7@test.com',
        password: '9852'
    })
    user2.save()

    const event1 = await new Event({
        user_id: user1._id,
        name: 'A5 Sportsplex',
        address: '11000 Alpharetta Hwy',
        cost: '$7',
        level: 'C-Open',
        contact: '123@123.com',
        date: '01/10/23',
        time: '6:15pm-10:00pm',
        description: 'A5 is a local gym that regularly hosts practices for boys and girls club volleyball. On fridays, they usually have an open gym for anyone to come and play!'
    })
    event1.save()

    const event2 = await new Event({
        user_id: user2._id,
        name: 'TK Volleyball',
        address: '1425 Market Blvd',
        cost: '$5',
        level: 'B-Open',
        contact: '123@123.com',
        date: '01/10/23',
        time: '7:00pm-10:00pm',
        description: 'TK Volleyball is another local gym that regularly hosts practice mainly for girls club volleyball. Make sure you bring a pre-made team with you.'
    })
    event2.save()

    console.log('events added')
    const comments = [
        {
            user_id: user1._id,
            event_id: event1._id,
            contents: `you get to stay on all night if you win!`
        },
        {
            user_id: user1._id,
            event_id: event2._id,
            contents: `you get to stay on all night if you win or lose!`
        },
        {
            user_id: user2._id,
            event_id: event1._id,
            contents: `the competition here is fierce!`
        },
        {
            user_id: user2._id,
            event_id: event2._id,
            contents: `this place rules!`
        }
    ]
    await Comment.insertMany(comments)
    console.log(`Seeded!`)


}

const run = async () => {
    await main()
    db.close()
}

run()