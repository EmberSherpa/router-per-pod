export default function() {
  this.route('admin', function(){
    this.route('login');
  });
}
