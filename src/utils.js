export const getInitials = (name) => {
    var parts = name.split(' ');
    var initials = '';
    
    for (var i = 0; i < parts.length; i++) {
      initials += parts[i].charAt(0).toUpperCase();
    }
    
    return initials;
  }
  