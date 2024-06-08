// Copyright (c) 2024, Sakthi Kumar P and contributors
// For license information, please see license.txt

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


frappe.ui.form.on("Teachers", {
    refresh(frm) {

    },
    validate(frm) {
        if(!validateEmail(frm.email)){
            frappe.("")
        }
    }
});
