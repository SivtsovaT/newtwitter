//header          

    const AppHeader = () => {
        let h1 = document.createElement('h1');
        h1.className="app-header d-flex";
        h1.innerHTML="Tatiana Sivtsova";
        document.body.append(h1);
    
        let h2 = document.createElement('h2');
        h2.className="app-header d-flex";
        h2.innerHTML ="5 записей, из них понравилось 0";
        document.body.append(h2);
    };
    AppHeader();
    
    //search-panel
    
    const SearchPanel = () => {
        let input = document.createElement('input');
        input.className="form-control search-input";
        input.type = "text";
        input.placeholder="Поиск по записям";
        document.body.append(input);
    
    };
     SearchPanel();


