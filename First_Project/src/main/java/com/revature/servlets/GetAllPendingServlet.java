package com.revature.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.dao.EmployeeDaoImpl;
import com.revature.dao.RequestDaoImpl;

/**
 * Servlet implementation class GetAllPendingServlet
 */
public class GetAllPendingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public GetAllPendingServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDaoImpl req = new RequestDaoImpl();
		String Request_Object = req.getAllPendingEmployeeReinbursments();
		response.setContentType("text/html");
		System.out.println(Request_Object);
		response.getWriter().write(Request_Object);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
