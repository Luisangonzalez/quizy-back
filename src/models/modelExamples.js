import {
    Test,
    User,
    CuestionBase,
    ChooseCuestion,
    OneCuestion,
    ArrowCuestion
} from './models';

export const newUserExample = new User({
    username: 'usernameString',
    name: 'nameString',
    LastName: 'lastNameString',
    email: 'emailString',
    url: 'urlString',
    image: 'imageString',
    socialNetwork: [
        {
            google: 'googleString',
            facebook: 'facebookString',
            twitter: 'twitterString',
            email: 'emailString'
        }
    ]
});

let newArrowCuestion = new ArrowCuestion({
    cuestion: 'Selecciona con flechas',
    columnA: [
        {
            phrase: 'leche',
            indexColumnB: [0, 1]
        }, {
            phrase: 'huevo',
            indexColumnB: [2]
        }, {
            phrase: 'plumas',
            indexColumnB: [2]
        }
    ],
    columnB: ['vaca', 'queso', 'gallina']
});

let newOneCuestion = new OneCuestion({
  cuestion: '¿De que color era el caballo blanco de Santiago?',
  answer: 'BLANCO'
});

let newChooseCuestion = new ChooseCuestion({
    cuestion: '¿Cual es mi pueblo?',
    answers: [
        {
            answer: 'Galvez',
            isCorrect: false
        }, {
            answer: 'Menasalbas',
            isCorrect: true
        }
    ]
});

let newCuestionChoose = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'CHOOSE',
    choose: newChooseCuestion
});

let newCuestionTrueFalse = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'TRUEFALSE',
    truefalse: newChooseCuestion
});

let newCuestionCheck = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'CHECK',
    check: newChooseCuestion
});

let newCuestionOne = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'ONE',
    one: newOneCuestion
});

let newCuestionArrow = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'ARROW',
    arrow: newArrowCuestion
});

let newCuestionSection = new CuestionBase({
  image: 'noimage',
  youtube: 'noyoutbe',
  link: 'no link',
  description: 'description',
  type: 'SECTION'
});

export const newTestExample = new Test({
    title: 'title_String',
    author: newUserExample,
    category: 'category_String',
    order: true,
    askLater: true,
    allowNotAsk: true,
    statistics: [
        {
            passed: 5,
            nTimes: 2,
            volarations: 3,
            nShared: [
                {
                    google: 2,
                    facebook: 1,
                    twitter: 6,
                    email: 0
                }
            ]
        }
    ],
    dateCreation: Date.now(),
    dataPublished: Date.now(),
    timeToFinish: Date.now(),
    private: [
        {
            users: [
                {
                    userId: 'Manolo',
                    write: true
                }
            ]
        }
    ],
    cuestions: [
        newCuestionChoose,
        newCuestionTrueFalse,
        newCuestionOne,
        newCuestionCheck,
        newCuestionArrow,
        newCuestionSection
    ]
});
