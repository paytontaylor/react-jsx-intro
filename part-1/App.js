const App = () => (
        <div>
            <FirstComponent/>
            <NamedComponent name='Payton'/>
        </div>
    )

ReactDOM.render(<App />, 
  document.getElementById("root"));