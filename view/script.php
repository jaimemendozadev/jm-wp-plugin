<?php 
  wp_register_script('react-js', plugins_url('js/public/bundle.js', dirname(__file__)));

  

  $credentials_array = array(
    'nonce' => wp_create_nonce('wp_rest')
  );

  wp_localize_script('react-js', 'secretCredentials', $credentials_array);

  wp_enqueue_script('react-js');

?>
