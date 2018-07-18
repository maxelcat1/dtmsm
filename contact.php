<?php

//php form to create the contact form for DC White
// Edward of www.ee-web.co.uk





//create a function for escaping the data

function escape_data($data) {

	//address magic quotes

	if (ini_get('magic_quotes_gpc')){

		//echo 'here is the data after its just arrived= '.$data;

		$data = stripslashes($data);

		//echo '<br />Here is the data after stripslashes= '.$data;

	}	

	//return the escaped values

	return $data;

}//end function







?>



<!-- start the page -->

<div class="mainWrapper">



<?php 

$displayForm = true;


if (isset($_POST['submitted'])){

	//echo 'form submitted';

	

	

	//check that required fields are filled in

		$errors=array();	

		//check through each of the mandetory fields

			//name

			if (empty($_POST['fullName'])){

				$errors[]= 'You haven\'t entered your name';

			}else{

				$fullName=escape_data(trim(htmlspecialchars($_POST['fullName'])));

			}

			//phone

			if (empty($_POST['phone'])){

				$errors[] ='You did not enter a contact phone number';

			}else{

				$phone=escape_data(trim(htmlspecialchars($_POST['phone'])));

			}

			
			//postcode

			if (empty($_POST['postcode'])){

				$errors[] ='You did not enter a postcode';

			}else{

				$postcode=escape_data(trim(htmlspecialchars($_POST['postcode'])));

			}
			

			//comment

			if (empty($_POST['comment'])){

				$errors[] ='You did not enter a comment';

			}else{

				$comment=escape_data(trim(htmlspecialchars($_POST['comment'])));

			}

			

			//email

			if (!empty($_POST['email1'])){

				$email=escape_data(trim($_POST['email1']));

				if (!eregi ('^[[:alnum:]][a-z0-9_\.\-]*@[a-z0-9\.\-]+\.[a-z]{2,4}$', $email)){

					$errors[]='The email you entered is of the wrong format';

				}				

			}else{

				$errors[] ='You forgot to enter your email';

			}

	

			if (($_POST['email1'])!=($_POST['email2'])){

				$errors[]='The emails that you entered don\'t match.';

			}

			

			

		if (!empty($errors)){

			echo '<div class="item-page_standardLayout">

			<p><br /></p>

			<hr />

			<h2>Please Correct These Errors</h2>
			<ul class="formErrors">			
			';

				foreach ($errors as $msg) {

					echo '<li class="formError">'.$msg.'</li>'."\n";

			}

			echo '<ul></div>';

		}else{ //everything is good so time to create a message and not display the form

				//echo 'create me an email';

					$displayForm=false;
					$subject="Enquiry from DC White website";
					$body="Name = ".$fullName."\n\n";		
					$body.="Phone =".$phone."\n\n";					
					$body.="Postcode = ".$postcode."\n\n";
					$body.="email = ".$email."\n\n";
					$body.="comment= ".$comment;
					

					//echo '<p>$body='.$body.'</p>';

					mail ('edward@eldon.gotadsl.co.uk, info@dcwhiteaccidentrepair.co.uk,' .$email, $subject, $body, 'From: no-reply@dcwhiteaccidentrepair.co.uk');
					
				//	echo '<div class="item-page_standardLayout">';

				//	echo '<h2>Thank you for your Interest</h2>';

				//	echo '<p>Your message has been sent to Chase Lounge Coffee Shop<p>';

				//	echo '</div>';

		}	
}


if ($displayForm){

?>



<form class="contactForm" action="connect.php" method="post" >

<div class="formElement"><p class="formText">Name:</p><input class="formField" type="text" name="fullName" value="<?php 

	if (!empty($_POST['fullName'])){

		echo $_POST['fullName'];

	}?>" /><div class="clearer"></div></div>







<div class="formElement"><p class="formText">Email:</p><input class="formField" type="text" name="email1" value="<?php 

	if(isset($_POST['email1'])){

	echo $_POST['email1'];

	}?>" /><div class="clearer"></div></div>

<div class="formElement"><p class="formText">Reee-enter email:</p><input class="formField" type="text" name="email2" value="<?php  

	if (isset($_POST['email1'])&&($_POST['email2'])==($_POST['email1'])){

	echo $_POST['email2'];

	}?>" /><div class="clearer"></div></div>



<div class="formElement"><p class="formText">Comment or question:</p><textarea class="formComment" name="comment" cols="25" rows="3"><?php 

	if (!empty($_POST['comment'])){

		echo $_POST['comment'];

	}?></textarea><div class="clearer"></div></div>



<p><input type="submit" value="Send Comment" /></p>

<input type="hidden" name="submitted" value="TRUE" />



</form>



<?php

}else{ //no need to show form - all sent

	echo '<h2>Your comment has been sent - thank you.</h2>';

}

?>





</div>