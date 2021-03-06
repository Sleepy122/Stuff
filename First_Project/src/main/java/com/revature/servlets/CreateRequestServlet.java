package com.revature.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.dao.RequestDaoImpl;

public class CreateRequestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public CreateRequestServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDaoImpl req = new RequestDaoImpl();
		float amount = Float.parseFloat(request.getParameter("requestAmount").toString());
		String description = request.getParameter("description").toString();
		
		req.createRequest(description, amount);
		response.sendRedirect("EmployeeHome.html");
	}

}
