package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class TableBean implements Serializable {
    private List<TableRowBean> table;
    public TableBean(){
        table = new ArrayList<>();
    }

    public List<TableRowBean> getTable() {
        return table;
    }

    public void setTable(List<TableRowBean> table) {
        this.table = table;
    }

    public void addRow(TableRowBean tableRow) {
        table.add(tableRow);
    }

    public List<TableRowBean> getResults() {
        return table;
    }

    public void setResults(List<TableRowBean> tableRows) {
        this.table = tableRows;
    }
}
