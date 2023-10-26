package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    private static final long serialVersionUID = -7754328558138565093L;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().println(request.getParameter("clear") + "123");
        if (request.getParameter("clear") != null && request.getParameter("clear").equals("true")) {
            request.getRequestDispatcher("/clear").forward(request, response);
        }
        else {
            request.getRequestDispatcher("/area_check").forward(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/Form.jsp").forward(request, response);
    }
}
