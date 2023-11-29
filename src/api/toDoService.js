const TO_DO_ITEMS = [
    {id:1, name:'Shopping', isCompleted: true},
    {id:2, name:'Running', isCompleted: false},
    {id:3, name:'Lunch', isCompleted: true},
]

export const fetchToDos = () => {
    return new Promise((resolve) => {
        resolve(TO_DO_ITEMS);
    })
}