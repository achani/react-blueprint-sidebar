const menuItems = [
    {name: 'Home', to: '/', icon: 'home', subMenuItems: [] },
    {name: 'Search', to: '/search', icon: 'search', 
      subMenuItems: [    { name: 'bSub1', to: '/bsub1'},
      { name: 'bSub2', to: '/bsub2'}, 
      { name: 'bSub3', to: '/bsub3'}]
    },
    {name: 'My Applications', to: '/my-applications', icon: 'applications' , subMenuItems: []}

  ]


export default menuItems;