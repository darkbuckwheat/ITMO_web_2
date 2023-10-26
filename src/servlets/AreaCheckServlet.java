package servlets;

import beans.Result;
import beans.TableBean;
import beans.TableRowBean;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class AreaCheckServlet extends HttpServlet {
    private static final long serialVersionUID = -7754328558138565095L;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final long startTime = System.nanoTime();
        String currentTime = request.getParameter("currentTime");
        if (currentTime == null) {
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:ss");
            currentTime = LocalTime.now().format(dtf);
        }
        if (request.getParameter("x").length() > 20 || request.getParameter("y").length() > 20
                || request.getParameter("r").length() > 20) {
            response.sendError(400, "One or all parameters are too long");
            return;
        }
        if (!(correctCheck(request.getParameter("x")) && correctCheck(request.getParameter("y"))
                && correctCheck(request.getParameter("r")))) {
            response.sendError(400, "One or all parameters are not numbers");
            return;
        }
        Double x = Double.parseDouble(request.getParameter("x").replace(',', '.'));
        Double y = Double.parseDouble(request.getParameter("y").replace(',', '.'));
        Double r = Double.parseDouble(request.getParameter("r").replace(',', '.'));
        if (!validate(x, y, r)) {
            response.sendError(400, "One or all parameters are out of range");
            return;
        }

        boolean hit = hit_check(x, y, r);
        final long endTime = System.nanoTime();

        TableRowBean tableRow = new TableRowBean(x, y, r, hit ? Result.HIT : Result.MISS, currentTime, (endTime - startTime) / 1000);
        TableBean results = (TableBean) request.getSession().getAttribute("table");
        if (results == null) {
            results = new TableBean();
        }
        results.addRow(tableRow);
        request.getSession().setAttribute("table", results);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        StringBuilder rows = new StringBuilder();
        for (TableRowBean row : results.getTable()) {
            rows.append("<tr>\n")
                    .append("<td>").append(row.getX()).append("</td>\n")
                    .append("<td>").append(row.getY()).append("</td>\n")
                    .append("<td>").append(row.getR()).append("</td>\n")
                    .append("<td>").append(row.getResult()).append("</td>\n")
                    .append("<td>").append(row.getCurrentTime()).append("</td>\n")
                    .append("<td>").append(row.getExecutionTime()).append("</td>\n")
                    .append("</tr>\n");
        }
        writer.println(rows);
    }

    public boolean correctCheck(String par){
        if (par == null) {return false;}
        try {
            Double.parseDouble(par.replace(',', '.'));
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }

    public boolean validate(Double x, Double y, Double r) {
        if (-4 > x || 4 < x) {return false;}
        if (-5 >= y || 3 <= y) {return false;}
        if (1 > r || 5 < r || (r - r.intValue() != 0)) {return false;}
        return true;
    }

    public boolean hit_check(Double x, Double y, Double r) {
        if (x >= 0 && y >= 0) {return (x <= r && y <= r / 2);}
        if (x >= 0 && y < 0) {return (x * x + y * y <= r * r);}
        if (x < 0 && y < 0) {return (y >= -x / 2 - r / 2);}
        return false;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/Form.jsp").forward(request, response);
    }
}
