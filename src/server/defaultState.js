export const defaultState = {
    users: [{
        id:"U1",
        name:"Dev"
    },{
        id:"U2",
        name:"S. Munsey"
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },
    {
        name:"Doing",
        id:"G2",
        owner:"U1"
    },
    {
        name:"Done",
        id:"G3",
        owner:"U1"
    }],
    tasks:[{
        name:"Refactor tests",
        id:"T1",
        group:"G1",
        isComplete:false
    },
    {
        name:"Meet with CTO",
        id:"T2",
        group:"G1",
        isComplete:false
    },{
        name:"Compile ES6",
        id:"T3",
        group:"G2",
        isComplete:false
    },{
        name:"Update component snapshots",
        id:"T3",
        group:"G2",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great work!!"
    },
    {
        owner:"U2",
        id:"C2",
        task:"T1",
        content:"Nice!!"
    },
    {
        owner:"U1",
        id:"C3",
        task:"T2",
        content:"Awesome!!"
    }]
}