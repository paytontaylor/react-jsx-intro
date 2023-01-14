const App = () => (
    <div>
        <Person name='Jeff' age={18} hobbies={['running', 'bicycling', 'swimming']}/>
        <Person name='Bob' age={17}/>
        <Person name='JuanCarlos' age={17}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))