import { clerkClient } from '@clerk/clerk-sdk-node';

export const requireRole = (requiredRole) => {
  return async (req, res, next) => {
    try {
      const { userId } = req.auth;

      // Get the Clerk user (backend)
      const user = await clerkClient.users.getUser(userId);
      const role = user.privateMetadata?.role;
      console.log(role);

      if (role !== requiredRole) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
      }
      
      req.user= user;
      next();
    } catch (err) {
      console.error('Role check error:', err);
      res.status(500).json({ message: 'Server error during role validation' });
    }
  };
};
