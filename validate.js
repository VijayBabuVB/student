<script>
function validate()
{ 
   if( document.studentregistration.studentname.value == "" )
   {
     alert( "Please provide your Name!" );
     document.studentregistration.studentname.focus() ;
     return false;
   }
    if( document.studentregistration.rollno.value == "" )
   {
     alert( "Please provide your Rollno!" );
     document.studentregistration.rollno.focus() ;
     return false;
   }
   if( document.studentregistration.emailid.value == "" )
   {
     alert( "Please provide your emailid!" );
     document.studentregistration.emailid.focus() ;
     return false;
   }
   if( document.studentregistration.fathername.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.studentregistration.fathername.focus() ;
     return false;
   }
   if( document.studentregistration.fatheroccupation.value == "" )
   {
     alert( "Please provide your Father Occupation!" );
     document.studentregistration.fatheroccuption.focus() ;
     return false;
   }
   if( document.studentregistration.fannualincome.value == "" )
   {
     alert( "Please provide your Father Income!" );
     document.studentregistration.fannualincome.focus() ;
     return false;
   }
   if( document.studentregistration.fathermobileno.value == "" )
   {
     alert( "Please provide your Father Mobile No!" );
     document.studentregistration.fathermobileno.focus() ;
     return false;
   }
   if( document.studentregistration.mothername.value == "" )
   {
     alert( "Please provide your Mother Name!" );
     document.studentregistration.mothername.focus() ;
     return false;
   }
   if( document.studentregistration.motheroccupation.value == "" )
   {
     alert( "Please provide your Mother Occupation!" );
     document.studentregistration.motheroccupation.focus() ;
     return false;
   }
   if( document.studentregistration.mannualincome.value == "" )
   {
     alert( "Please provide your Mother Income!" );
     document.studentregistration.mannualincome.focus() ;
     return false;
   }
   if( document.studentregistration.mothermobileno.value == "" )
   {
     alert( "Please provide your Mother Mobile No!" );
     document.studentregistration.mothermobileno.focus() ;
     return false;
   }
   if( document.studentregistration.paddress.value == "" )
   {
     alert( "Please provide your Postal Address!" );
     document.studentregistration.paddress.focus() ;
     return false;
   }
   if( document.studentregistration.address.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.studentregistration.address.focus() ;
     return false;
   }
   if ( ( studentregistration.gender[0].checked == false ) && ( studentregistration.gender[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
   if( document.studentregistration.City.value == "" )
   {
     alert( "Please provide your city!" );
     document.studentregistration.city.focus() ;
     return false;
   }   
   if( document.studentregistration.course.value == "" )
   {
     alert( "Please provide your course!" );
     document.studentregistration.course.focus() ;
     return false;
   }   
   if( document.studentregistration.district.value == "" )
   {
     alert( "Please provide your Select district!" );
     document.studentregistration.district.focus() ;
     return false;
   }   
   if( document.studentregistration.state.value == "-1" )
   {
     alert( "Please provide your Select State!" );
      document.studentregistration.state.focus() ;
     return false;
   }
   if( document.studentregistration.pincode.value == "" ||
           isNaN( document.studentregistration.pincode.value) ||
           document.studentregistration.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.studentregistration.pincode.focus() ;
     return false;
   }
   var email = document.studentregistration.emailid.value;
   atpos = email.indexOf("@");
   dotpos = email.lastIndexOf(".");
   if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.studentregistration.emailid.focus() ;
     return false;
 }
   if( document.studentregistration.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.studentregistration.dob.focus() ;
     return false;
   }
   if( document.studentregistration.mobileno.value == "" ||
           isNaN( document.studentregistration.mobileno.value) ||
           document.studentregistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.studentregistration.mobileno.focus() ;
     return false;
   }
  if( document.studentregistration.sschoolname.value == "" )
   {
     alert( "Please provide your SSLC school name!" );
     document.studentregistration.sschoolname.focus() ;
     return false;
   }
  if( document.studentregistration.smedium.value == "" )
   {
     alert( "Please provide your SSLC medium!" );
     document.studentregistration.smedium.focus() ;
     return false;
   }
  if( document.studentregistration.scompletion.value == "" )
   {
     alert( "Please provide your SSLC completion!" );
     document.studentregistration.scompletion.focus() ;
     return false;
   }
  if( document.studentregistration.smark.value == "" )
   {
     alert( "Please provide your SSLC mark!" );
     document.studentregistration.smark.focus() ;
     return false;
   }
  if( document.studentregistration.hschoolname.value == "" )
   {
     alert( "Please provide your HSC school name!" );
     document.studentregistration.hschoolname.focus() ;
     return false;
   }
  if( document.studentregistration.hmedium.value == "" )
   {
     alert( "Please provide your HSC medium!" );
     document.studentregistration.hmedium.focus() ;
     return false;
   }
  if( document.studentregistration.hcompletion.value == "" )
   {
     alert( "Please provide your HSC completion!" );
     document.studentregistration.hcompletion.focus() ;
     return false;
   }
  if( document.studentregistration.hmark.value == "" )
   {
     alert( "Please provide your HSC mark!" );
     document.studentregistration.hmark.focus() ;
     return false;
   }
  if( document.studentregistration.ugcollegename.value == "" )
   {
     alert( "Please provide your UG college name!" );
     document.studentregistration.ugcollegename.focus() ;
     return false;
   }
  if( document.studentregistration.ugdepartment.value == "" )
   {
     alert( "Please provide your UG department!" );
     document.studentregistration.ugdepartment.focus() ;
     return false;
   }
  if( document.studentregistration.ugcompletion.value == "" )
   {
     alert( "Please provide your UG completion!" );
     document.studentregistration.ugcompletion.focus() ;
     return false;
   }
  if( document.studentregistration.ugmark.value == "" )
   {
     alert( "Please provide your UG mark!" );
     document.studentregistration.ugmark.focus() ;
     return false;
   }
  if( document.studentregistration.extra.value == "" )
   {
     alert( "Please provide your Extra activities!" );
     document.studentregistration.extra.focus() ;
     return false;
   }  
 if( document.studentregistration.hobbies.value == "" )
   {
     alert( "Please provide your Hobbies!" );
     document.studentregistration.hobbies.focus() ;
     return false;
   }
  if( document.studentregistration.language.value == "" )
   {
     alert( "Please provide your language!" );
     document.studentregistration.language.focus() ;
     return false;
   }
  if( document.studentregistration.achievements.value == "" )
   {
     alert( "Please provide your Achievements!" );
     document.studentregistration.achievements.focus() ;
     return false;
   }
  if( document.studentregistration.skils.value == "" )
   {
     alert( "Please provide your Computer Skils!" );
     document.studentregistration.skils.focus() ;
     return false;
   }
   return( true );
}
</script>